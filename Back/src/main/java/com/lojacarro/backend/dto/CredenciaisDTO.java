package com.lojacarro.backend.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Getter @Setter
public class CredenciaisDTO {

    @NotEmpty(message = "Campo e-mail de preenchimento obrigatório.")
    private String email;
    @NotEmpty(message = "Campo senha de preenchimento obrigatório.")
    private String senha;
}
