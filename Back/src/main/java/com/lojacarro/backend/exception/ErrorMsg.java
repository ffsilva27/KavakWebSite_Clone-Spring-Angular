package com.lojacarro.backend.exception;

import lombok.Getter;
import lombok.Setter;

import java.util.Arrays;
import java.util.List;

@Getter @Setter
public class ErrorMsg {
    private List<String> msg;

    public ErrorMsg(String msg) {
        this.msg = Arrays.asList(msg);
    }

    public ErrorMsg(List<String> msg){
        this.msg = msg;
    }
}
