package com.vitos.pizza.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class SystemExceptionHandler {

    @ExceptionHandler(Exceptions.class)
    public ResponseEntity<Object> handleException(Exceptions exception) {
        return ResponseEntity.status(exception.getResponseCodeValue()).body(exception.getResponseMessage());
    }
}