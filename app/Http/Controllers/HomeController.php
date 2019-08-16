<?php

namespace App\Http\Controllers;

use App\Http\Services\Interfaces\BabyWarehouseInterface;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * @var BabyWarehouseInterface
     */
    private $babyWarehouse;

    /**
     * HomeController constructor.
     *
     * @param BabyWarehouseInterface $babyWarehouse
     */
    public function __construct(BabyWarehouseInterface $babyWarehouse)
    {
        $this->babyWarehouse = $babyWarehouse;
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('app');
    }
}
