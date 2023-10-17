<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Band;

class BandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bands = Band::all();
        return $bands;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $band = new Band;
        $band->country  = $request->country;
        $band->name = $request->name;
        $band->id_genre = $request->id_genre;
        $band->save();
        return $band;

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $band = Band::find($id);
        return $band;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $band = Band::find($id);
        $band->country  = $request->country;
        $band->name = $request->name;
        $band->id_genre = $request->id_genre;
        $band->save();
        return $band;

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $band = Band::find($id);
        $band->delete();
        return "Se elimino la banda exitosamente";
    }

    public function pdf(){
        $bands = Band::all();
        $pdf = \PDF::loadView('pdf', compact('bands'));
        return $pdf->download('bands.pdf');
    }
}
