package com.pereira.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pereira.backend.model.Servico;

public interface ServicoRepository extends JpaRepository<Servico, Integer> {
    
}
