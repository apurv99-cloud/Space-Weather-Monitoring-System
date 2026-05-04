package com.spaceweather.demo.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spaceweather.demo.model.WeatherData;
import com.spaceweather.demo.model.DTO.WeatherDTO;
import com.spaceweather.demo.repository.WeatherRepository;

@Service
public class WeatherService {

    @Autowired
    private NOAAService noaaService;

    @Autowired
    private WeatherRepository repository;

    @Autowired
    private AlertWebSocketService webSocketService;

    public WeatherData fetchAndProcessData() {

        // Data fetch karna
        WeatherDTO dto = noaaService.fetchAllData();

        // Data Map karna
        WeatherData data = new WeatherData();
        data.setKpindex(dto.getKpIndex());
        data.setSolarSpeedOfWind(dto.getSolarWind());
        data.setLevelOfRadiation(dto.getRadiation());
        data.setTimeStamp(LocalDateTime.now());

        // Alert calculate karna
        String alert = calculateAlert(data);
        data.setAlertLevel(alert);

        // Database mein save karna
        WeatherData saved = repository.save(data);

        if ("SEVERE".equals(alert)) {
            webSocketService.sendAlert(saved);
        }

        return saved;
    }

    private String calculateAlert(WeatherData data) {
        // Logic for SEVERE
        if (data.getKpindex() >= 7 || data.getLevelOfRadiation() >= 8) {
            return "SEVERE";
        }

        // Logic for WARNING
        if (data.getKpindex() >= 5 || data.getSolarSpeedOfWind() > 700) {
            return "WARNING";
        }

        return "NORMAL";
    }

    public List<WeatherData> getLatest() {
        return repository.findTop10ByOrderByTimestampDesc();
    }

    // 🔹 Only severe alerts
    public List<WeatherData> getSevereAlerts() {
        return repository.findByAlertLevel("SEVERE");
    }
}