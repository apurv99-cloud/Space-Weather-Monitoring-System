package com.spaceweather.demo.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import com.spaceweather.demo.model.WeatherData;

@Service
public class AlertWebSocketService {
    private final SimpMessagingTemplate messagingTemplate;

    public AlertWebSocketService(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    public void sendAlert(WeatherData data) {

        Map<String, Object> payload = new HashMap<>();
        payload.put("message", "🚨 Severe Space Weather Detected!");
        payload.put("level", data.getAlertLevel());
        payload.put("kpIndex", data.getKpindex());
        payload.put("solarWind", data.getSolarSpeedOfWind());
        payload.put("radiation", data.getLevelOfRadiation());
        payload.put("time", data.getTimeStamp());

        messagingTemplate.convertAndSend("/topic/alerts", data);
    }
}
