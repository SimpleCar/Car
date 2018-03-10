package cn.kgc.dao;

import cn.kgc.entity.User;

import java.util.List;

public interface UserMapper {
    List<User> selectAll();
}
