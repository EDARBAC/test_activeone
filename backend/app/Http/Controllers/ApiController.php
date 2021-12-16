<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function t1(Request $request)
    {
        $a = strtolower($request->a);
        $b = strtolower($request->b);

        $frequency = [];

        if(strlen($a) < 1 || strlen($a) > 50 || strlen($b) < 1 || strlen($b) > 50)
            return null;

        if(strlen($a) != strlen($b)) 
            return 'Not Anagrams';

        if($a == $b) 
            return 'Not Anagrams';

        $arr_a = str_split($a);
        $arr_b = str_split($b);

        for ($i=0; $i < count($arr_a); $i++) { 
            if(!isset($frequency[$arr_a[$i]])){
                $frequency[$arr_a[$i]] = 0;
            }

            if(!isset($frequency[$arr_b[$i]])){
                $frequency[$arr_b[$i]] = 0;
            }

            $frequency[$arr_a[$i]] += 1;
            $frequency[$arr_b[$i]] -= 1;
        }

        foreach ($frequency as $value) {
            if($value != 0)
                return 'Not Anagrams';
        }

        return 'Anagrams';
    }

    public function t2(Request $request)
    {
        $a = $request->a;

        if(!is_array($a))
            return null;

        if(!is_array($a[0]))
            return null;

        $x = count($a)-1;
        $i = 0;
        $x1 = 0; $x2 = 0;

        foreach ($a as $item) {
            if(count($a) != count($item))
                return null;
            $x1 += $item[$i];
            $x2 += $item[$x-$i];
            $i += 1;
        }

        return abs($x1-$x2);
    }

    public function t3(Request $request){
        $a = $request->a;
        $b = $request->b;
        $s = $request->s;
        $t = $request->t;
        $n = $request->n;
        $m = $request->m;

        $oranges = 0; $apples = 0;

        foreach ($m as $item) {
            $x = $a+$item;
            if($x >= $s && $x <= $t){
                $apples += 1;
            }
        }

        foreach ($n as $item) {
            $x = $b+$item;
            if($x >= $s && $x <= $t){
                $oranges += 1;
            }
        }

        return "$apples\n$oranges";
    }
}
