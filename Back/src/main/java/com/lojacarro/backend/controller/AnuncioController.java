package com.lojacarro.backend.controller;

import com.lojacarro.backend.dto.AnuncioDTO;
import com.lojacarro.backend.dto.MsgSucesso;
import com.lojacarro.backend.model.Anuncio;
import com.lojacarro.backend.service.AnuncioService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Slf4j
@RestController
@RequestMapping("/anuncio")
@CrossOrigin(value = "http://localhost:4200")
public class AnuncioController {

    @Autowired
    AnuncioService anuncioService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Page<Anuncio> findAll(Anuncio anuncio, Pageable pageable){
        return anuncioService.findAll(anuncio, pageable);
    }

    @PostMapping("/salvar")
    @ResponseStatus(HttpStatus.CREATED)
    public MsgSucesso saveAnuncio(@RequestBody @Valid AnuncioDTO anuncioDTO){
        anuncioService.saveAnuncio(anuncioDTO);
        return new MsgSucesso("Anuncio cadastrado com sucesso!");
    }

    @PostMapping("/foto")
    public void upload(@RequestParam MultipartFile foto) {
        anuncioService.salvarFoto(foto);
    }

}
