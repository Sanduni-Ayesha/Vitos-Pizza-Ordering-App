package com.vitos.pizza.exception;

import org.springframework.http.HttpStatus;

public class Exceptions extends RuntimeException{

    private final ResponseStatusCodes responseStatusCodes;

    public Exceptions(ResponseStatusCodes responseStatusCodes){
        this.responseStatusCodes = responseStatusCodes;
    }

    public HttpStatus getResponseCodeValue() {
        return responseStatusCodes.getCode(responseStatusCodes);
    }

    public String getResponseMessage() {
        return responseStatusCodes.getMessage(responseStatusCodes);
    }

}
