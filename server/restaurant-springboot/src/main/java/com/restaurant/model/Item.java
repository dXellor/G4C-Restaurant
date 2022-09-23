package com.restaurant.model;

import org.hibernate.engine.internal.Cascade;

import javax.persistence.*;

@Entity
@Table(catalog = "db_restaurant", name = "Item")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @ManyToOne(cascade = CascadeType.PERSIST)
    private Category category;

    @Column(nullable = false)
    private float price;

    public Item() {
    }

    public Item(Long id, String name, Category cat, float price) {
        this.id = id;
        this.name = name;
        this.category = cat;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Item{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price=" + price +
                '}';
    }
}
