package com.lojacarro.backend;

import com.lojacarro.backend.model.Teste;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/teste")
@CrossOrigin("http://localhost:4200")
public class TesteController {

    @GetMapping
    public ResponseEntity<Teste> teste(){
        Teste testando = new Teste();
        return ResponseEntity.ok().body(testando);
    }

}
