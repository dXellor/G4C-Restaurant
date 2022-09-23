package com.restaurant.repository;

import com.restaurant.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.yaml.snakeyaml.events.Event;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

}
