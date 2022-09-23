package com.restaurant.controller;

import com.restaurant.model.Item;
import com.restaurant.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/restaurant")
public class ItemController {

    @Autowired
    ItemService itemService;

    @RequestMapping(value = "",  method = RequestMethod.GET)
    public ResponseEntity<List<Item>> getAllItems(){
        List<Item> items = itemService.getAll();
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Item> getOneById(@PathVariable Long id){
        Item item = itemService.getItemById(id);
        return new ResponseEntity<>(item, HttpStatus.OK);
    }

    @RequestMapping(value = "", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Item> addItem(@RequestBody Item newItem){
        Item item = itemService.addItem(newItem);
        return new ResponseEntity<>(item, HttpStatus.OK);
    }
}
