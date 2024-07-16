package com.vitos.pizza.exception;

import org.springframework.http.HttpStatus;

public enum ResponseStatusCodes {
    USER_NOT_FOUND(HttpStatus.NOT_FOUND, "No user exists with the following name.");

    private HttpStatus code;
    private String message;

    ResponseStatusCodes(HttpStatus code, String message) {
        this.code = code;
        this.message = message;
    }

    public HttpStatus getCode(ResponseStatusCodes responseStatusCodes) {
        return responseStatusCodes.code;
    }

    public String getMessage(ResponseStatusCodes responseStatusCodes) {
        return responseStatusCodes.message;
    }
}
