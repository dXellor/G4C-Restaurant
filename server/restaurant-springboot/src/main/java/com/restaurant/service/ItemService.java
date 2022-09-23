package com.restaurant.service;

import com.restaurant.model.Item;
import com.restaurant.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public List<Item> getAll(){
        return itemRepository.findAll();
    }

    public Item getItemById(Long id){
        return itemRepository.findById(id).get();
    }
}
