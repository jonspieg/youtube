import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css']
})
export class PalindromeComponent implements OnInit {

  private candidate: string = "";
  private palindromeLetters: string[] = "DAMMITIMMAD".split('');
  private isValidPalindrome: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.queryParams.subscribe((params: Params) => {
        this.candidate = params['p'];
        if(this.candidate)
        {
          let palindromeLetters: string[] = this.candidate.toUpperCase().split('');
          if(this.isPalindrome(palindromeLetters))
          {
            this.isValidPalindrome = true;
            this.palindromeLetters = palindromeLetters;
          }
        }
      });
  }

  isPalindrome(candidate: string[]): boolean
  {
    for(let i=0;i<Math.floor(0.5*candidate.length)-1;i++)
      if(candidate[i] != candidate[candidate.length-i-1])
        return false;
    return true;
  }

}
