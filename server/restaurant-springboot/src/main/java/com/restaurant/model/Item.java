package com.restaurant.model;

import javax.persistence.*;

@Entity
@Table(catalog = "db_restaurant", name = "Item")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    
}
