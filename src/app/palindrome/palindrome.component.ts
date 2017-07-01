import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css']
})
export class PalindromeComponent implements OnInit {
  private palindromeLetters = ["A","B","B","A"];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.queryParams.subscribe((params: Params) => {
        let palindrome = params['p'];
        if(palindrome)
          this.palindromeLetters = palindrome.split('');
      });
  }

  isPalindrome()
  {
  }

}
