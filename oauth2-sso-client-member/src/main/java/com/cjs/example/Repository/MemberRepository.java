package com.cjs.example.Repository;

import com.cjs.example.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface MemberRepository extends JpaRepository<Member, Integer>{

    Member findMemberById(int id);

    @Modifying
    @Query(value = "delete from sys_user where id = ?1",nativeQuery = true)
    Integer deleteById(int id);

}
