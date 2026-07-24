package com.spaceweather.demo.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.spaceweather.demo.model.DTO.WeatherDTO;

@Service
public class NOAAService {

    private final RestTemplate restTemplate = new RestTemplate();

    // ==========================
    // MAIN METHOD
    // ==========================
    public WeatherDTO fetchAllData() {

        double kp = fetchKpIndex();
        double solarWind = fetchSolarWindSpeed();
        double radiation = fetchRadiationLevel();

        return new WeatherDTO(kp, solarWind, radiation);
    }

    // ==========================
    // KP INDEX
    // ==========================
    private double fetchKpIndex() {

        try {

            String url = "https://services.swpc.noaa.gov/json/planetary_k_index_1m.json";

            List<Map<String, Object>> response
                    = restTemplate.getForObject(url, List.class);

            if (response != null && !response.isEmpty()) {

                Map<String, Object> latest = response.get(response.size() - 1);

                Object kp = latest.get("kp_index");

                if (kp != null) {
                    return Double.parseDouble(kp.toString());
                }
            }

        } catch (Exception e) {
            System.out.println("KP Index API failed: " + e.getMessage());
        }

        return 0.0;
    }

    // ==========================
    // SOLAR WIND SPEED
    // ==========================
    private double fetchSolarWindSpeed() {

        try {

            // Updated NOAA endpoint
            String url = "https://services.swpc.noaa.gov/json/rtsw/rtsw_wind_1m.json";

            List<Map<String, Object>> response
                    = restTemplate.getForObject(url, List.class);

            if (response != null && !response.isEmpty()) {

                Map<String, Object> latest = response.get(response.size() - 1);

                Object speed = latest.get("proton_speed");

                if (speed != null) {
                    return Double.parseDouble(speed.toString());
                }
            }

        } catch (Exception e) {
            System.out.println("Solar Wind API failed: " + e.getMessage());
        }

        return 0.0;
    }

    // ==========================
    // RADIATION LEVEL
    // ==========================
    private double fetchRadiationLevel() {

        try {

            String url = "https://services.swpc.noaa.gov/json/goes/primary/xrays-6-hour.json";

            List<Map<String, Object>> response
                    = restTemplate.getForObject(url, List.class);

            if (response != null && !response.isEmpty()) {

                Map<String, Object> latest = response.get(response.size() - 1);

                Object flux = latest.get("flux");

                if (flux != null) {
                    return Double.parseDouble(flux.toString());
                }
            }

        } catch (Exception e) {
            System.out.println("Radiation API failed: " + e.getMessage());
        }

        return 0.0;
    }
}
