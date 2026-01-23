package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.ToString;

@Entity
@Table(name = "tbl_memo")
@ToString
public class Memo {

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Id
    private Long id;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long mno;

}
