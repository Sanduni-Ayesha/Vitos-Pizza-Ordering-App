package com.vitos.pizza.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name="order_items")
public class OrderItems {
    @Id
    private int orderId;
    private int userId;
    private int quatity;
}