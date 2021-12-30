package com.cjs.example.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import javax.persistence.Table;
import java.sql.Timestamp;

@Table(name="sys_user")
@Entity
public class Member {
    @Id
    @GeneratedValue
    private int id;
    @Column(nullable = false, unique = true)
    private String username;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false)
    private String nickname;
    @Column(nullable = false)
    private Timestamp create_time;



//    public Member(String username, String password, String nickname) {
//        this.username = username;
//        this.password = password;
//        this.nickname = nickname;
//        this.create_time =
//    }

//    public Member() {
//
//    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return username;
    }

    public void setUserName(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public Timestamp getCreateTime(){
        return create_time;
    }
    public void setCreateTime(Timestamp create_time){
        this.create_time = create_time;
    }

}
