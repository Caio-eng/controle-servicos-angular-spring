package com.pereira.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pereira.backend.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    
}
