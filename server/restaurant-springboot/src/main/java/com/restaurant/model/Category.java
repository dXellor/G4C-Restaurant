package com.restaurant.model;

import javax.persistence.*;

@Entity
@Table(catalog = "db_restaurant", name = "Category")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private long cname;

    public Category() {
    }

    public Category(Long id, long cname) {
        this.id = id;
        this.cname = cname;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public long getCname() {
        return cname;
    }

    public void setCname(long cname) {
        this.cname = cname;
    }

    @Override
    public String toString() {
        return "Category{" +
                "id=" + id +
                ", cname=" + cname +
                '}';
    }
}
