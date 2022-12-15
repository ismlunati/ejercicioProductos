package com.formacion.apirest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.formacion.apirest.entity.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Long>{

	
	
}
