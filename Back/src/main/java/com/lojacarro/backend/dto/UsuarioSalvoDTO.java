package com.lojacarro.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter @Builder @AllArgsConstructor
public class UsuarioSalvoDTO {
    private String email;
    private String msg;
}
