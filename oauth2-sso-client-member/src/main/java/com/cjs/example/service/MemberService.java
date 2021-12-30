package com.cjs.example.service;

import com.cjs.example.entity.Member;
import java.util.List;

public interface MemberService {
    public List<Member> getUserList();

    public Member findMemberById(int id);

    public void save(Member member);

    public void edit(Member member);

//    public Member deleteMemberById(int id);
//    void deleteMember(int id);
    public void delete(int id);
}
