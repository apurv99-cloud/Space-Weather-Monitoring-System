package com.spaceweather.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spaceweather.demo.model.WeatherData;

public interface WeatherRepository extends JpaRepository<WeatherData, Long> {

    List<WeatherData> findTop10ByOrderByTimestampDesc();

    List<WeatherData> findByAlertLevel(String alertLevel);
}