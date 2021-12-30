package com.cjs.example.controller;

import com.cjs.example.entity.Member;
import com.cjs.example.service.MemberService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.security.Principal;
import javax.annotation.Resource;
import java.util.List;


@Controller
@RequestMapping("/member")
public class MemberController {

//    @GetMapping("/list")
//    public String list() {
//
//        return "member/list";
//    }

//    @GetMapping("/info")
//    @ResponseBody
//    public Principal info(Principal principal) {
//        return principal;
//    }
//
//    @GetMapping("/me")
//    @ResponseBody
//    public Authentication me(Authentication authentication) {
//        return authentication;
//    }
//
//    @PreAuthorize("hasAuthority('member:save')")
//    @ResponseBody
//    @PostMapping("/add")
//    public String add() {
//
//        return "add";
//    }
//
//    @PreAuthorize("hasAuthority('member:detail')")
//    @ResponseBody
//    @GetMapping("/detail")
//    public String detail() {
//        return "detail";
//    }
    @Resource
    MemberService memberService;
//
//    @RequestMapping("/list")
//    public String index() {
//        return "redirect:/list";
//    }

    @RequestMapping("/list")
    public String list(Model model) {
        List<Member> members=memberService.getUserList();
        model.addAttribute("members", members);
        return "member/list";
    }

    @RequestMapping("/userAdd")
    public String userAdd() {
        return "member/userAdd";
    }

    @RequestMapping("/add")
    public String add(Member member) {
        memberService.save(member);
        return "redirect:/list";
    }

    @RequestMapping("/userEdit")
    public String userEdit(Model model,int id) {
        Member member=memberService.findMemberById(id);
        model.addAttribute("member", member);
        return "member/userEdit";
    }

    @GetMapping("/edit")
    public String edit(Member member) {
        memberService.edit(member);
        return "redirect:/list";
    }

    @GetMapping("/delete")
    public String delete(int id) {
        memberService.delete(id);
        return "member/list";
    }
}
