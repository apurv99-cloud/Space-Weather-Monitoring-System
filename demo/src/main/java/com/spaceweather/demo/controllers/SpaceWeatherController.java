package com.spaceweather.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spaceweather.demo.model.WeatherData;
import com.spaceweather.demo.service.WeatherService;

@RestController
@RequestMapping("/api/weather")
public class SpaceWeatherController {

    private final WeatherService weatherService;

    // @Autowired
    public SpaceWeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    //  Manual trigger (testing ke liye)
    @PostMapping("/fetch")
    public ResponseEntity<WeatherData> fetchNow() {
        return ResponseEntity.ok(weatherService.fetchAndProcessData());
    }

    
    @GetMapping("/latest")
    public ResponseEntity<List<WeatherData>> getLatest() {
        return ResponseEntity.ok(weatherService.getLatest());
    }

    
    @GetMapping("/alerts/severe")
    public ResponseEntity<List<WeatherData>> getSevereAlerts() {
        return ResponseEntity.ok(weatherService.getSevereAlerts());
    }
}