package com.restaurant.controller;

import com.restaurant.model.Category;
import com.restaurant.model.Item;
import com.restaurant.service.CategoryService;
import com.restaurant.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.env.RandomValuePropertySourceEnvironmentPostProcessor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/restaurant/items")
@CrossOrigin(origins = "http://localhost:4200")
public class ItemController {

    @Autowired
    ItemService itemService;
    @Autowired
    CategoryService categoryService;

    @RequestMapping(value = "",  method = RequestMethod.GET)
    public ResponseEntity<Page<Item>> getAllItems(Pageable pageInfo){
        Page<Item> items = itemService.getAll(pageInfo);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Item> getOneById(@PathVariable Long id){
        Item item = itemService.getItemById(id);
        return new ResponseEntity<>(item, HttpStatus.OK);
    }

    @RequestMapping(value = "", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Item> addItem(@RequestBody Item newItem){
        Category category = categoryService.getByName(newItem.getCategory().getCname());
        newItem.getCategory().setId(category.getId());
        Item item = itemService.addItem(newItem);
        return new ResponseEntity<>(item, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Boolean> deleteItem(@PathVariable Long id){
        Boolean didItWork = itemService.deleteItem(id);
        return new ResponseEntity<>(didItWork, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Item> updateItem(@PathVariable Long id, @RequestBody Item item){
        Category c = categoryService.getByName(item.getCategory().getCname());
        item.setCategory(c);
        item.setId(id); //Not necessary, we are passing through whole item from frontend
        Item updatedItem = itemService.addItem(item);

        return new ResponseEntity<>(updatedItem, HttpStatus.OK);
    }

    @RequestMapping(value = "/filter", method = RequestMethod.GET, params = "fname")
    public ResponseEntity<Page<Item>> getItemByName(Pageable pageInfo, @RequestParam String fname){
        Page<Item> items = itemService.findByName(fname, pageInfo);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @RequestMapping(value = "/filter", method = RequestMethod.GET, params = "cname")
    public ResponseEntity<Page<Item>> getItemByCategory(Pageable pageInfo, @RequestParam String cname){
        Category category = categoryService.getByName(cname);
        Page<Item> items = itemService.findByCategory(category, pageInfo);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }
}
