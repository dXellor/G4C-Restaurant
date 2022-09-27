package com.restaurant.service;

import com.restaurant.model.Item;
import com.restaurant.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public Page<Item> getAll(Pageable pageInfo){
        return itemRepository.findAll(pageInfo);
    }

    public Item getItemById(Long id){
        return itemRepository.findById(id).get();
    }

    public Item addItem(Item newItem){
        return itemRepository.save(newItem);
    }

    public Boolean deleteItem(Long id){
        Boolean flag = doesItemExist(id);
        if(flag){
            itemRepository.deleteById(id);
        }
        return flag;
    }

    public Page<Item> findByName(String name, Pageable pageInfo){
        return itemRepository.findByNameContainingIgnoreCase(name, pageInfo);
    }

    private Boolean doesItemExist(Long id){
        Boolean flag = false;
        Item item = itemRepository.findById(id).get();
        if( item != null){
            flag = true;
        }

        return flag;
    }
}
