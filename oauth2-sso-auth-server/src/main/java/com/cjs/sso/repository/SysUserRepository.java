package com.cjs.sso.repository;

import com.cjs.sso.entity.SysUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;


public interface SysUserRepository extends JpaSpecificationExecutor<SysUser>, JpaRepository<SysUser, Integer> {

    SysUser findByUsername(String username);
}
