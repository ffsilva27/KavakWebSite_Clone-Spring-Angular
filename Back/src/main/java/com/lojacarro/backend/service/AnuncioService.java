package com.lojacarro.backend.service;

import com.lojacarro.backend.dto.AnuncioDTO;
import com.lojacarro.backend.model.Anuncio;
import com.lojacarro.backend.repository.AnuncioRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
@Slf4j
public class AnuncioService {
    @Autowired
    AnuncioRepository anuncioRepository;

    @Value("${caminho.pasta.foto.salvamento}")
    private String raiz;

    @Value("${caminho.pasta.foto.front}")
    private String caminhoPasta;

    private int idTeste = 4;

    public Page<Anuncio> findAll(Anuncio anuncio, Pageable pageable){
        ExampleMatcher matcher = ExampleMatcher.matching().withIgnoreCase();
        Example example = Example.of(anuncio, matcher);
        return anuncioRepository.findAll(example, pageable);
    }

    public void salvarFoto(MultipartFile foto) {
        this.salvar(foto);
    }

    public void salvar(MultipartFile arquivo) {
        Path diretorioPath = Paths.get(this.raiz);
        Path arquivoPath = diretorioPath.resolve(arquivo.getOriginalFilename());
        log.info(String.valueOf(diretorioPath));
        try {
            Files.createDirectories(diretorioPath);
            arquivo.transferTo(arquivoPath.toFile());

        } catch (IOException e) {
            throw new RuntimeException("Problemas na tentativa de salvar arquivo.", e);
        }
    }

    public void saveAnuncio(AnuncioDTO anuncioDTO){
        Path diretorioPath = Paths.get(this.raiz);
        Anuncio anuncio = Anuncio.builder()
                .id(this.idTeste)
                .fabricante(anuncioDTO.getFabricante())
                .modelo(anuncioDTO.getModelo())
                .anomodelo(anuncioDTO.getAnomodelo())
                .valor(anuncioDTO.getValor())
                .km(anuncioDTO.getKm())
                .foto(this.caminhoPasta+anuncioDTO.getFoto())
                .build();
        this.idTeste++;
        System.out.println(anuncio.getFoto());
        anuncioRepository.save(anuncio);
    }

}
