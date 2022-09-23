package com.restaurant.controller;

import com.restaurant.model.Category;
import com.restaurant.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/restaurant/categories")
@CrossOrigin(origins = "http://localhost:4200")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @RequestMapping(value = "", method = RequestMethod.GET)
    public ResponseEntity<List<Category>> getAllCategories(){
        List<Category> categories = categoryService.getAll();

        return new ResponseEntity<>(categories, HttpStatus.OK);
    }

}
