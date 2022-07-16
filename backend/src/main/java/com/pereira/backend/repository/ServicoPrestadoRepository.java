package com.pereira.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pereira.backend.model.ServicoPrestado;

public interface ServicoPrestadoRepository extends JpaRepository<ServicoPrestado, Integer> {
    
}
