package com.restaurant.repository;

import com.restaurant.model.Category;
import com.restaurant.model.Item;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.yaml.snakeyaml.events.Event;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long>{

    public Page<Item> findByNameContainingIgnoreCase(String name, Pageable pageInfo);

    public Page<Item> findByCategory(Category c, Pageable pageInfo);
}
