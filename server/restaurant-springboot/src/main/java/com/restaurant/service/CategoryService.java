package com.restaurant.service;

import com.restaurant.model.Category;
import com.restaurant.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    public List<Category> getAll(){
        return categoryRepository.findAll();
    }


}
