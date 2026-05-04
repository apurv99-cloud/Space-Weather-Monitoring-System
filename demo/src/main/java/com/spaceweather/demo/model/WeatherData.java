package com.spaceweather.demo.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class WeatherData {
    private Long id;
    private double solarSpeedOfWind;
    private double levelOfRadiation;
    private double kpindex;
    private String alertLevel;
    private LocalDateTime timeStamp;

}