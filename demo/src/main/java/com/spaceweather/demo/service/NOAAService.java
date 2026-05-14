package com.spaceweather.demo.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.spaceweather.demo.model.DTO.WeatherDTO;

@Service
public class NOAAService {

    private final RestTemplate restTemplate = new RestTemplate();

    // MAIN METHOD (sab kuch yahin se aayega)
    public WeatherDTO fetchAllData() {

        double kp = fetchKpIndex();
        double solarWind = fetchSolarWindSpeed();
        double radiation = fetchRadiationLevel();

        return new WeatherDTO(kp, solarWind, radiation);
    }

    private double fetchKpIndex() {

        String url = "https://services.swpc.noaa.gov/json/planetary_k_index_1m.json";

        List<Map<String, Object>> response = restTemplate.getForObject(url, List.class);

        if (response != null && !response.isEmpty()) {
            Map<String, Object> latest = response.get(response.size() - 1);
            return Double.parseDouble(latest.get("kp_index").toString());
        }

        return 0.0;
    }

    private double fetchSolarWindSpeed() {

        String url = "https://services.swpc.noaa.gov/products/solar-wind/plasma-6-hour.json";

        List<List<Object>> response = restTemplate.getForObject(url, List.class);

        if (response != null && response.size() > 1) {
            List<Object> latest = response.get(response.size() - 1);

            // index 2 = speed
            return Double.parseDouble(latest.get(2).toString());
        }

        return 0.0;
    }

    public double fetchRadiationLevel() {

        try {

            String url = "https://services.swpc.noaa.gov/json/goes/primary/xrays-6-hour.json";

            RestTemplate restTemplate = new RestTemplate();

            List<Map<String, Object>> response = restTemplate.getForObject(url, List.class);

            if (response == null || response.isEmpty()) {
                return 0.0;
            }

            Map<String, Object> latest = response.get(response.size() - 1);

            Object flux = latest.get("flux");

            return flux != null
                    ? Double.parseDouble(flux.toString())
                    : 0.0;

        } catch (Exception e) {

            System.out.println("Radiation API failed.");

            return 0.0;
        }
    }
}
