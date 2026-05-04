package com.spaceweather.demo.model.DTO;

public class WeatherDTO {
    private double kpIndex;
    private double solarWind;
    private double radiation;

    public WeatherDTO(double kpIndex, double solarWind, double radiation) {
        this.kpIndex = kpIndex;
        this.solarWind = solarWind;
        this.radiation = radiation;
    }

    public double getKpIndex() {
        return kpIndex;
    }

    public double getSolarWind() {
        return solarWind;
    }

    public double getRadiation() {
        return radiation;
    }

}
