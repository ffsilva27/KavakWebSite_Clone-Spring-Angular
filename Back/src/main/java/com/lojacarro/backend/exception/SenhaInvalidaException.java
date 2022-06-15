package com.lojacarro.backend.exception;

public class SenhaInvalidaException extends RuntimeException{
    public SenhaInvalidaException(String message) {
        super(message);
    }
}
