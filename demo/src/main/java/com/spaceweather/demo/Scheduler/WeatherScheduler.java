package com.spaceweather.demo.Scheduler;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.spaceweather.demo.service.WeatherService;

@Component
public class WeatherScheduler {

    private final WeatherService weatherService;

    public WeatherScheduler(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @Scheduled(fixedRate = 60000)
    public void fetchWeatherData() {

        System.out.println("Fetching Space Weather Data...");

        weatherService.fetchAndProcessData();
    }
}