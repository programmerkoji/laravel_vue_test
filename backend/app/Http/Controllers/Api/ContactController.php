<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\ContactService;

class ContactController extends Controller
{
    public function __construct(protected ContactService $service) {}

    public function index()
    {
        return response()->json($this->service->getAll());
    }

    public function show($id)
    {
        return response()->json($this->service->getById($id));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required',
        ]);

        $contact = $this->service->create($validated);

        return response()->json($contact, 201);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required',
        ]);

        return response()->json($this->service->update($id, $validated));
    }

    public function destroy($id)
    {
        $this->service->delete($id);
        return response()->json(['message' => '削除しました']);
    }
}
