package com.restaurant.repository;

import com.restaurant.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT COUNT(u) FROM User u WHERE u.username=:uname AND u.password=:pwd")
    int doesUserExist(@Param("uname") String uname, @Param("pwd") String pwd);
}
