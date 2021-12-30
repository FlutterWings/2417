package com.cjs.example.serviceImpl;

import com.cjs.example.Repository.MemberRepository;
import com.cjs.example.entity.Member;
import com.cjs.example.service.MemberService;
import jdk.internal.instrumentation.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class MemberServiceImpl implements MemberService{

    @Autowired
    private MemberRepository memberRepository;

    @Override
    public List<Member> getUserList() {
        return memberRepository.findAll();
    }

    @Override
    public Member findMemberById(int id) { return memberRepository.findMemberById(id); }

    @Override
    public void save(Member member) {
        memberRepository.save(member);
    }

    @Override
    public void edit(Member member) {
        memberRepository.save(member);
    }

    @Override
//    public Member deleteMemberById(int id) { return memberRepository.deleteMemberById(id); }
//    public void deleteMember(int id){
//        MemberRepository.deleteMemberById(id);
//    }
    public void delete(int id) {
        memberRepository.deleteById(id);
    }
}
