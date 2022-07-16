package com.pereira.backend.controller.util;

import java.math.BigDecimal;

import org.springframework.stereotype.Component;

@Component
public class BigDecimalCoverter {
    
    public BigDecimal converter(String value) {
        if(value == null) {
            return null;
        }
        value = value.replace(".", "").replace(",", ".");
        return new BigDecimal(value);
    }
}
