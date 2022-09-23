package com.restaurant.controller;

import com.restaurant.model.Item;
import com.restaurant.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
}
