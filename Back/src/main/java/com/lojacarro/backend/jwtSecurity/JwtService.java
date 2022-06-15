package com.lojacarro.backend.jwtSecurity;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

@Service
public class JwtService {
    @Value("${security.jwt.expiracao}")
    private String expiracao;

    @Value("${security.jwt.chave-assinatura}")
    private String chaveAssinatura;


    public String gerarToken(UserDetails userDetails){
        long expiracaoData = Long.parseLong(expiracao);
        LocalDateTime localDateTime =LocalDateTime.now().plusMinutes(expiracaoData);
        Instant instant = localDateTime.atZone(ZoneId.systemDefault()).toInstant();
        Date date = Date.from(instant);

        return Jwts.builder()
                .setSubject(userDetails.getUsername())
                .setExpiration(date)
                .signWith(SignatureAlgorithm.HS512, chaveAssinatura)
                .compact();
    }

    public Claims obterClaims(String token){
        return Jwts.parser()
                .setSigningKey(chaveAssinatura)
                .parseClaimsJws(token)
                .getBody();
    }

    public boolean tokenValido(String token){
        Claims claims = obterClaims(token);
        LocalDateTime date = claims.getExpiration().toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime();
        return !LocalDateTime.now().isAfter(date);
    }
}
