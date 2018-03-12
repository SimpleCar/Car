package cn.kgc.dao;

import cn.kgc.entity.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserMapper {
    List<User> selectAll();

    User selectUser(@Param("uname")String uname,@Param("upwd")String upwd);
}
